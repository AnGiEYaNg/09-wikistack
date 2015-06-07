-MongoDB is a document-based NoSQL database
-swig
-Mongoose:
	Mongoose is a Node.js Object Document Mapper (ODM). For relational folks, ODMs are the MongoDB equivalent of Object Relational Mappers (ORMs). One major reason developers use ODMs like Mongoose is that it gives them the ability to define a schema for their documents which can then be used to map documents to objects in their programming language. With Mongoose, this feature serves as an easy transition for former Ruby on Rails developers used to working with ActiveRecord.

-mongod:
	the mongo server process, is the machinery that makes mongo work. The mongod process will wait for MongoDB commands from your various applications and give responses back to those applications.
-mongo:
	the mongo shell, is a user interface for accessing mongo databases.

mongod --config /usr/local/etc/mongod.conf


If you open the mongod.conf file above, using the command cat /usr/local/etc/mongod.conf, you'll see that it specifies a default logpath which is the file where all logs show up. This log file can be useful when to debugging database related issues. Every action the mongodb does will be referenced in this log. The way to "monitor" this file is to use the unix tail command.

tail -f /usr/local/var/log/mongodb/mongo.log

To start Mongo Shell in the terminal:
mongo
show dbs
use dbsName
show collections
db.collectionName.find()


To add it as launch agent:
$ ln -sfv /usr/local/opt/mongodb/*.plist ~/Library/LaunchAgents