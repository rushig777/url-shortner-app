
const Redis =require("ioredis")

const urlDatabase = new Redis(
  {
      host:"redis-14244.c301.ap-south-1-1.ec2.cloud.redislabs.com",
      port:14244,
      password:"FyFcDnR7TUqmHZ9Od9vK6uVRrz1sjMW6"
  }
);


module.exports=urlDatabase;
