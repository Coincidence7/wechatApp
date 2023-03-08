const sql = require("mssql")


const config = {
	user: "sa",
	password: "4~z*uF5}#V2Qf+",
	server: "49.233.5.44",
	database: "",
	options:{
		encrypt: true
	}
}

try{
	let pool = new sql.ConnectionPool(config);
	pool.connect()
}catch(e){
	console.log(e)
}
