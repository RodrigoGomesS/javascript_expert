class Service {
    async makeRequest(url) {
        return (await fetch(url)).json();
    }

    async getPlanets(url) {
        const result = await this.makeRequest(url);
        return {
            name: result.name,
            surface_water: result.surface_water,
            appearedIn: result.films.length
        };
    }
}

module.exports = Service;