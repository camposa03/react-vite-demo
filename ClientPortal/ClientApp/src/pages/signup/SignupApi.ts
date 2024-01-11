import { post } from '../../utils/Api.ts';

export class SignupApi {

    async signup(name: string) {
        await post('http://localhost:5154/Members/Signup', { name: name }, json => console.log(json));
    }
}