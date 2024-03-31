import axios from 'axios';
import { ref, isRef, isReactive, watchEffect } from 'vue';

export default function useAxios(args) {
    const status = ref(0);
    const isLoading = ref(false);
    const error = ref('');
    const resData = ref([]);

    function generateArgs(passedArgs) {
        const defaultArgs = {
            method: 'get',
            url: '',
            data: {},
        };

        if (typeof passedArgs === 'string') {
            defaultArgs.url = passedArgs;

            return defaultArgs;
        }
        if (isRef(passedArgs)) {
            defaultArgs.url = passedArgs.value;

            return defaultArgs;
        }

        return { ...defaultArgs, ...passedArgs };
    }

    function fetch(fetchArgs) {
        status.value = 0;
        isLoading.value = true;
        error.value = '';
        const { method, url, data } = fetchArgs;

        axios({
            method,
            url,
            data,
        })
            .then((res) => {
                status.value = res.status;
                if (res.status === 200) {
                    resData.value = res.data;
                } else {
                    error.value = 'Error! Data is not available.';
                }
            })
            .catch((err) => {
                if (err.message) {
                    error.value = err.message;
                } else {
                    error.value = 'Error! Try again.';
                }
            })
            .finally(() => {
                isLoading.value = false;
            });
    }

    if (isRef(args) || isReactive(args)) {
        watchEffect(() => fetch(generateArgs(args)));
    } else {
        fetch(generateArgs(args));
    }

    return {
        status,
        isLoading,
        error,
        data: resData,
    };
}
