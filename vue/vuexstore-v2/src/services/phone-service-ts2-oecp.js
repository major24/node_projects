
import axios from 'axios';

class PhoneServiceV2 {

    getPhoneNumbersTs2(id) {
        console.log('ts2: getting data for - ' + id);
        let p = new Promise((resolve, reject) => {

            setTimeout(() => {
                axios.get('data/phone-data-ts2.json')
                .then(response => {
                    //resolve(response.data);
                    const ph = response.data.filter((e) => {
                        return e.id == id;
                    });
                    resolve(ph);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                }); // endof axios 

            }, 500);

        }); // endof promise

        return p;
    }

    getPhoneNumbersOecp(id) {
        console.log('oecp: getting data for - ' + id);
        let p = new Promise((resolve, reject) => {
            axios.get('data/phone-data-oecp.json')
            .then(response => {
                 //resolve(response.data);
                const ph = response.data.filter((e) => {
                    return e.id == id;
                });
                resolve(ph);
            })
            .catch(error => {
                console.log(error);
                reject(error);
            })
        })

        return p;
    }


    async getPhoneNumbersTs2Oecp(id) {
        let p = new Promise((resolve, reject) => {
            
            // simulate api call..
            //setTimeout(() => {
                Promise.all([this.getPhoneNumbersTs2(id), this.getPhoneNumbersOecp(id)])
                .then(function([response_ts2, response_oecp]){
                    console.log('success');
                    console.log(response_ts2);
                    console.log(response_oecp);
                    if (response_oecp && response_oecp.length > 0) {
                        resolve(response_oecp);
                    } else {
                        resolve(response_ts2);
                    }
                    //const ph = response.data.filter((e) => {
                      //  return e.id == id;
                    //})
                    //resolve(response.data);
                })
                .catch(function(error){
                    console.log(error);
                    reject(error);
                })
            //}, 1000); // timeout

        });

        let result = await p;
        return result;
    }
}

export default new PhoneServiceV2;


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
