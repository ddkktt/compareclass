const model = ("./../models/todo");

module.exports = {
    list: (req,res) => {
        const response = model.find();
        res.send(response);
    },
    list2 : (req,res) => {
        const response = model.find();
        res.send(response);

    }
};