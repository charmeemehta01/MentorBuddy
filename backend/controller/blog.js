var sql = require('../db/db_config');

module.exports = {
	all: function (req, res) {
		sql.query('select * from blog ', (err, result) => {
			if (err) {
				res.json({ status: 'error', msg: 'Error: Please try again' });
			} else {
				res.json({ status: 'success', data: result });
			}
		});
	},
	BlogID: function (req, res) {
		sql.query('select * from blog where blog_id= ?', [req.params.blogID], (err, result) => {
			if (err) {
				res.json({ status: 'error', msg: 'Error: Please try again' });
			} else if (result.length === 1) {
				res.json({ status: 'success', data: result });
			} else if (result.length === 0) {
				res.json({ status: 'no blogs', data: [] });
			}
		});
	},
	add: function (req, res) {
		sql.query(
			'insert into blog (blog_title,blog_desc,blog_img) values(?,?,?)',
			[req.body.blog_title, req.body.blog_desc, req.body.blog_img],
			(err, result) => {
				if (err) {
					res.json({ status: 'error', msg: 'Error: Please try again' });
				} else {
					res.json({ status: 'success' });
				}
			}
		);
	},
};
