const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
app.use(express.json());

// Swagger definition
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Demo API",
      version: "1.0.0",
      description: "2 simple APIs with Swagger"
    }
  },
  apis: ["./index.js"]  // Swagger will read comments from this file
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

dd
/**
 * @swagger
 * /hello:
 *   get:
 *     summary: Returns a greeting
 *     responses:
 *       200:
 *         description: A greeting message
 */

/**
 * @swagger
 * /hellodshfjksdhfsdfjh:
 *   get:
 *     summary: Returns a greeting
 *     responses:
 *       200:
 *         description: A greeting message
 */
app.get("/hello", (req, res) => {
  res.json({ message: "Hello, Swaggferfff!  " });
});

/**
 * @swagger
 * /add:
 *   post:
 *     summary: Add two numbers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               a:
 *                 type: number
 *               b:
 *                 type: number
 *     responses:
 *       200:
 *         description: Result of addition
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: number
 */
app.post("/add", (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a + b });
});

app.post("/oppp", (req, res) => {
    const { a, b } = req.body;
    res.json({ result: a + b });
  });

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
