class Http{
    static instance = new Http();

    get = async(url) => {
        try {
            let req = await fetch(url)

            let json = await req.json()

            return json;
        } catch (error) {
            console.log("Http get method err", error)
            throw Error(error);
        }
    }

    post = async () =>{
        try{
            let req = fetch(url, {
                method: "POST",
                body
            });

            let json = await req.json();

            return json;
        }catch(error){
            console.log("http method post err", error)
            throw Error(error)
        }
    }
}

export default Http