export const getAccessToken = () => {
    const jsonData = localStorage.getItem('auth');

    if (!jsonData) {
        return null;
    }

    const authData = JSON.parse(jsonData)
    return authData?.accessToken;
}