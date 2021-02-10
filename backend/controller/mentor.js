var sql = require('../db/db_config');

module.exports = {
	add: function (req, res) {
		sql.query('select * from mentor where email = ?', [req.body.email], (err, result) => {
			if (err) {
				res.json({ status: 'error', msg: 'Error: Please try again' });
			} else if (result.length == 1) {
				res.json({ status: 'error', msg: 'Error: User already exists' });
			} else if (result.length == 0) {
				sql.query(
					'insert into mentor (name,img,field,workplace,work_exp,email,contactno,price,Flag) values (?,?,?,?,?,?,?,?,1)',
					[
						req.body.name,
						req.body.img,
						req.body.field,
						req.body.workplace,
						req.body.work_exp,
						req.body.email,
						req.body.contactno,
						req.body.price,
					],
					(err, result) => {
						if (err) {
							res.json({ status: 'error', msg: 'Error: Please try again' });
						} else {
							res.json({ status: 'success', msg: 'User added successfully !' });
						}
					}
				);
			}
		});
	},

	getall: function (req, res) {
		sql.query('select * from mentor where Flag = 1', (err, result) => {
			if (err) {
				res.json({ status: 'error', msg: 'Error: Please try again' });
			} else {
				res.json({ status: 'success', data: result });
			}
		});
	},

	getallF: function (req, res) {
		sql.query('select * from mentor where Flag = 0', (err, result) => {
			if (err) {
				res.json({ status: 'error', msg: 'Error: Please try again' });
			} else {
				res.json({ status: 'success', data: result });
			}
		});
	},

	getByID: function (req, res) {
		sql.query('select * from mentor where mentor_id= ?', [req.params.getbyID], (err, result) => {
			if (err) {
				res.json({ status: 'error', msg: 'Error: Please try again' });
			} else if (result.length === 1) {
				res.json({ status: 'success', data: result });
			} else if (result.length === 0) {
				res.json({ status: 'no users', data: [] });
			}
		});
	},
	getbyfield: function (req, res) {
		sql.query(
			'select * from mentor where Flag=1 and field like ' + sql.escape('%' + req.headers.search + '%'),
			(err, result) => {
				if (err) {
					res.json({ status: 'error', msg: 'Error: Please try again' });
				} else {
					res.json({ status: 'success', data: result });
				}
			}
		);
	},
	remove: function (req, res) {
		sql.query('delete from mentor where mentor_id= ?', [req.params.getByID], (err, result) => {
			if (err) {
				res.json({ status: 'error', msg: 'Error: Please try again' });
			} else {
				res.json({ status: 'success' });
			}
		});
	},
};
