export default {
        fun: async () => {
        return await invalidApi.run().catch((e) => showAlert("404 hit : " + e.message));
      },
        myFun1: async () => {
            //write code here
       const data = await usersApi.run()
         return "myFun1 Data"
        },
        myFun2: async () => {
            //use async-await or promises
        await this.myFun1()
            return "myFun2 Data"
        }
    }