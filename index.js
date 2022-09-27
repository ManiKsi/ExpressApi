// const AWS = require("aws-sdk");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { json } = require("express");

// AWS.config.update({
//   region: process.env.AWS_DEFAULT_REGION,
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_ID,
// });

var app = express();
app.use(express.json());
app.use(cors());
// const dynamoClient = new AWS.DynamoDB.DocumentClient();

app.get("/", async (req, res) => {
  res.send("Hello");
});
//get MetaDAta
// app.get("/getCat", async (req, res) => {
//   const params = {
//     TableName: "basic-data",
//     ProjectionExpression: "category",
//   };
//   const data = await dynamoClient.scan(params).promise();
//   res.send(data.Items);
// });

// app.post("/getStyles", async (req, res) => {
//   if (req.body.category) {
//     const params = {
//       TableName: "basic-data",
//       ProjectionExpression: "style_id",
//       KeyConditionExpression: "#cat = :cat",
//       ExpressionAttributeNames: {
//         "#cat": "category",
//       },
//       ExpressionAttributeValues: {
//         ":cat": req.body.category,
//       },
//     };
//     const data = await dynamoClient.query(params).promise();
//     res.send(data.Items);
//   }
// });

// app.post("/getSizeColor", async (req, res) => {
//   const params = {
//     TableName: "basic-data",
//     ProjectionExpression: "sizes,colors",
//     KeyConditionExpression: "#cat = :cat AND #style_id = :style_id ",
//     ExpressionAttributeNames: {
//       "#cat": "category",
//       "#style_id": "style_id",
//     },
//     ExpressionAttributeValues: {
//       ":cat": req.body.category,
//       ":style_id": req.body.style_id,
//     },
//   };
//   const data = await dynamoClient.query(params).promise();
//   res.send(data.Items);
// });

// app.get("/generateId", (req, res) => {
//   const id = Date.now();
//   res.send(JSON.stringify(id));
// });

// app.post("/setNewCategory", async (req, res) => {
//   const new_category = req.body;
//   const params = {
//     TableName: "basic-data",
//     Item: {
//       category: new_category.category,
//       style_id: "NA",
//     },
//   };
//   const result = await dynamoClient.put(params, function (err, data) {
//     if (err) {
//       console.log(err);
//       res.sendStatus(404);
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

// app.post("/setNewStyle", async (req, res) => {
//   const category = req.body.category;
//   const style_id = req.body.style_id;

//   const params = {
//     TableName: "basic-data",
//     Item: {
//       category: category,
//       style_id: style_id,
//     },
//   };
//   const result = await dynamoClient.put(params, function (err, data) {
//     if (err) {
//       res.sendStatus(404);
//       console.log(err);
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

// app.post("/setNewSize", async (req, res) => {
//   const category = req.body.category;
//   const style_id = req.body.style_id;
//   const size = req.body.size;

//   const params = {
//     TableName: "basic-data",
//     Key: {
//       category: category,
//       style_id: style_id,
//     },
//     UpdateExpression:
//       "set #sizes = list_append(if_not_exists(#sizes, :empty_list), :new_size)",
//     ExpressionAttributeNames: {
//       "#sizes": "sizes",
//     },
//     ExpressionAttributeValues: {
//       ":new_size": [size],
//       ":empty_list": [],
//     },
//   };
//   const result = await dynamoClient.update(params, function (err, data) {
//     if (err) {
//       res.sendStatus(404);
//       console.log(err);
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });
// app.post("/setNewColor", async (req, res) => {
//   const category = req.body.category;
//   const style_id = req.body.style_id;
//   const color = req.body.color;

//   const params = {
//     TableName: "basic-data",
//     Key: {
//       category: category,
//       style_id: style_id,
//     },
//     UpdateExpression:
//       "set #colors = list_append(if_not_exists(#colors, :empty_list), :new_color)",
//     ExpressionAttributeNames: {
//       "#colors": "colors",
//     },
//     ExpressionAttributeValues: {
//       ":new_color": [color],
//       ":empty_list": [],
//     },
//   };
//   const result = await dynamoClient.update(params, function (err, data) {
//     if (err) {
//       res.sendStatus(404);
//       console.log(err);
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

// app.post("/addInventory", async (req, res) => {
//   var requestArray = req.body.itemsArray;
//   var params = {
//     RequestItems: {
//       inventory: requestArray,
//     },
//   };
//   const result = await dynamoClient.batchWrite(params, function (err, data) {
//     if (err) {
//       res.sendStatus(404);
//       console.log(err);
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

// app.get("/getInventory", async (req, res) => {
//   const params = {
//     TableName: "inventory",
//   };
//   const result = await dynamoClient.scan(params).promise();
//   res.send(result);
// });

// app.post("/getItem", async (req, res) => {
//   const params = {
//     TableName: "inventory",
//     Key: {
//       product_id: req.body.product_id,
//       store_id: req.body.store_id,
//     },
//   };
//   const result = await dynamoClient.get(params).promise();

//   res.send(result.Item);
// });
// app.post("/deleteItem", async (req, res) => {
//   const params = {
//     TableName: "inventory",
//     Key: {
//       product_id: req.body.product_id,
//       store_id: req.body.store_id,
//     },
//   };
//   const result = await dynamoClient.delete(params).promise();
//   res.sendStatus(200);
// });

// app.post("/addQty", async (req, res) => {
//   const product_id = req.body.product_id;
//   const store_id = req.body.store_id;
//   const add_qty = Number(req.body.qty);
//   const params = {
//     TableName: "inventory",
//     Key: {
//       product_id: product_id,
//       store_id: store_id,
//     },
//     UpdateExpression: "set qty = qty + :add_qty",
//     ExpressionAttributeValues: {
//       ":add_qty": add_qty,
//     },
//   };
//   const result = await dynamoClient.update(params, function (err, data) {
//     if (err) {
//       res.sendStatus(404);
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

// app.post("/dataSort", async (req, res) => {
//   let params;
//   if (req.body.category && !req.body.store_id) {
//     params = {
//       TableName: "inventory",
//       FilterExpression: "category = :cat ",
//       ExpressionAttributeValues: {
//         ":cat": req.body.category,
//       },
//     };
//   } else if (req.body.store_id && !req.body.category) {
//     params = {
//       TableName: "inventory",
//       FilterExpression: "store_id = :store ",
//       ExpressionAttributeValues: {
//         ":store": req.body.store_id,
//       },
//     };
//   } else {
//     params = {
//       TableName: "inventory",
//       FilterExpression: "category = :cat AND store_id = :store ",
//       ExpressionAttributeValues: {
//         ":cat": req.body.category,
//         ":store": req.body.store_id,
//       },
//     };
//   }
//   const result = await dynamoClient.scan(params, function (err, data) {
//     if (err) {
//       res.sendStatus(404);
//     } else {
//       res.send(data.Items);
//     }
//   });
// });
app.listen(process.env.PORT || 3000);
