const dotenvSafe = require('dotenv-safe')
dotenvSafe.load({
	allowEmptyValues: true
})
module.exports = {
	DEV_PORT: Number(process.env.DEV_PORT),
}
