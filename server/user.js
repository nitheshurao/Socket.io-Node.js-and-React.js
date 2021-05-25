const user=[];

const adduser =({id,name,room})=>{
//jsmastry= jsmastry
name= name.trim().toLowerCase();
room= room.trim().toLowerCase();



const existingutse =user.find((user)=>user.room === room && user.name ===name); 
if(existingutse){
    return{error: 'username is taken'};
}
const users={id,name,room};
user.push(users);

return {user}
}

const removeuser =(id)=>{
    const index = user.findIndex((users) => users.id ===id)

    if(index !==-1){
        return user.splice(index,1)[0];
    }

}

const getuser =(id)=>user.find((users) =>  users.id === id)  ;

const getuserinroom=(room) => user.filter((users) => users.room === room);

module.exports = {adduser, removeuser,getuser,getuserinroom};