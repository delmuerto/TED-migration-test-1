export default {
	getAstronauts: () => {
		var astronauts=[]
		GetAstronauts.data.forEach((user) => {
			astronauts.push( {
				"label": user.name,
				"value": user.name
			})
		})
		return astronauts
	}
}