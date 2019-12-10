const SharedService = {
    logger: (key: string, value: any) => {
        console.log(key.toUpperCase(), value);
    },
};
export default SharedService
