import decode from 'jwt-decode';

class AuthService {
    getProfile() {
        return decode(this.getToken());
    }

    loggedIn() {
        const token = this.getToken();

        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else return false;
        } catch (err) {
            return false;
        }
    }

    getToken() {
        // Retrives the user token from local storage.
        return localStorage.getItem('id_token');
    }

    login(idToken) {
        // saves user token to local storage
        localStorage.setItem('id_token', idToken);
        window.location.assign('/');
    }

    logout() {
        localStorage.removeItem('id_token');
        // this will reload the page and reset the stae of the application
        window.location.assign('/');
    }
}

export default new AuthService();