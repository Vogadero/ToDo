// 引入mongoose模块
const mongoose = require('mongoose');
// 原因是因为:findOneAndUpdate()内部会使用findAndModify驱动，驱动即将被废弃，所以弹出警告！
mongoose.set("useFindAndModify", false);

// 创建任务集合规则
const taskSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	completed: {
		type: Boolean,
		default: false
	}
}, {
	versionKey: false
});

// 创建todo集合
const Task = mongoose.model("task", taskSchema);

// 将集合构造函数作为模块成员进行导出
module.exports = Task;