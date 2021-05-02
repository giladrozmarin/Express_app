


    import path, { dirname } from 'path';
    import { fileURLToPath } from 'url';
    import fs from 'fs/promises';
    // const __dirname = dirname(fileURLToPath(import.meta.url));
   const __dirname = process.cwd();
  
    export const getAllUsers = async () => JSON.parse(await fs.readFile(path.resolve(`${__dirname}/data`,'users.json'),'utf-8'));
    
    export const getUserById = async (id) =>{

     const data = JSON.parse(await fs.readFile(path.resolve(`${__dirname}/data`,'users.json'),'utf-8'));

     return  data.Users.filter(item => item.id == id)
    }
    
    export const DeleteUserById = async (id) => {
      const data = JSON.parse(await fs.readFile(path.resolve(`${__dirname}/data`,'users.json'),'utf-8'));
      const newData = data.Users.filter(item => item.id != id)   
      await fs.writeFile(path.resolve(`${__dirname}/data`,'users.json'),JSON.stringify({"Users":newData}));
 
    }

   export const PatchUser = async (id,key,value) => {
    const data = JSON.parse(await fs.readFile(path.resolve(`${__dirname}/data`,'users.json'),'utf-8'));
    const newData = data.Users.filter(item => item.id == id ? item[key]=value : item)
    await fs.writeFile(path.resolve(`${__dirname}/data`,'users.json'),JSON.stringify({"Users":newData}));
   }

   export const PutUser = async (id,user) => {
    const data = JSON.parse(await fs.readFile(path.resolve(`${__dirname}/data`,'users.json'),'utf-8'));
     const newData = data.Users.map(item => item.id == id ? user : item)
    console.log(user)
    await fs.writeFile(path.resolve(`${__dirname}/data`,'users.json'),JSON.stringify({"Users":newData}));
   }