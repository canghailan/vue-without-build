module.exports = {
	data: function() {
		return {
			loading: false,
			list: [],
			selection: []
		};
	},
	created: function() {
		this.fetchData();
	},
	watch: {
		'$route': 'fetchData'
	},
	methods: {
		fetchData: function() {
			var self = this;
			var loading = self.$loading();
			console.log(self.$route.query)
			$http.get('mock/data.json').then(function(r) {
				self.list = r.data;
				setTimeout(function() {
					loading.close();
				}, 1000)
			})
		},
		handleSelectionChange: function(val) {
			this.selection = val;
		},
		handleNew: function() {
			this.$router.push('/new')
		},
		handleEdit: function(index, row) {
			this.$router.push('/' + index)
		},
		handleDelete: function(index, row) {
			var self = this;
			self.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(function() {
				self.$message({
					type: 'success',
					message: '删除成功!'
				});
			}).catch(function() {
				self.$message({
					type: 'info',
					message: '已取消删除'
				});
			});
		},
		handleDeleteSelection: function() {
			var self = this;
			self.$alert('删除成功');
		},
		handlePageChange: function(page) {
			this.$router.push({
				path: '/',
				query: {
					page: page
				}
			})
		}
	}
}