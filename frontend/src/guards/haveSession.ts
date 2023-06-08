export const haveSession = async () => {
    const token = localStorage.getItem("token");

    return token != null;
};
