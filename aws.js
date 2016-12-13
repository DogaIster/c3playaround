function connect()
{
	var params = {
  ClusterSecurityGroupName: 'default', /* required */
  CIDRIP: 'arn:aws:iam::984500282156:role/MCDatabase_Role',
  EC2SecurityGroupName: 'STRING_VALUE',
  EC2SecurityGroupOwnerId: 'STRING_VALUE'
};
	var redshift = new AWS.Redshift();
	redshift.authorizeClusterSecurityGroupIngress(params, function (err, data) {
		if (err) console.log(err); // an error occurred
		else     console.log(data);           // successful response
		});
}

function connect2() {
var Redshift = require('node-redshift');
 
var client = {
  user: "awsuser",
  database: "mobicontrol",
  password: "Welcome123",
  port: 5494,
  host: "redshift-5494.cxvwwvumct05.us-east-1.redshift.amazonaws.com"
};
 
var redshiftClient = new Redshift(client);
 
module.exports = redshiftClient;
}