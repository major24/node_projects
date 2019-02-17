
import axios from 'axios';

class PhoneService {

    async getAllPhoneNumbersOecp() {
        let p = new Promise((resolve, reject) => {
            
            // simulate api call..
            setTimeout(() => {
                axios.get('data/phone-data-oecp.json')
                .then(function(response){
                    console.log('success');
                    //console.log(response);
                    resolve(response.data);
                })
                .catch(function(error){
                    console.log(error);
                    reject(error);
                })
            }, 1000); // timeout

        });

        let result = await p;
        return result;
    }
}

export default new PhoneService;


/**
// tested - works
        axios.get('https://api.github.com/users/octocat')
            .then(function(response){
                console.log('success');
                console.log(response);
            })
            .catch(function(error){
                console.log(error);
            })
 */
