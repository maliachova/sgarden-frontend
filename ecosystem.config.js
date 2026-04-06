module.exports = {
	apps: [{
		name: "client",
		script: "npm",
		args: ["run", "serve"],
		instances: 1,
		exec_mode: "cluster",
	}],
};
