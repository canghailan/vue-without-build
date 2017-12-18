module.exports = {
	data: function() {
		return {
			form: {
				name: '',
				region: '',
				date1: '',
				date2: '',
				delivery: false,
				type: [],
				resource: '',
				desc: ''
			}
		}
	},
	methods: {
		onSubmit: function() {
			this.$message('submit!')
		},
		onCancel: function() {
			var self = this;
			self.$message({
				message: 'cancel!',
				type: 'warning',
				onClose: function() {
					self.$router.push('/');
				}
			});
		}
	}
}