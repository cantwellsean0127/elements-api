import express from "express"
import chalk from "chalk"
import pg from "pg"
import dotenv from "dotenv"

let pool = undefined

const start = () => {

    dotenv.config()

    pool = new pg.Pool({
        host: process.env.databaseHost,
        port: process.env.databasePost,
        database: process.env.databaseName,
        user: process.env.databaseUsername,
        password: process.env.databasePassword
    })

    const app = express()
    app.use(express.static("./public"))
    app.use(express.json())

    app.get("/api/elements/:id?", readElements)
    app.use(sendPageNotFound)

    app.listen(process.env.serverPort, () => {
        console.log(chalk.bold.green(`\nServer started on port ${process.env.serverPort}`))
    })
}

const readElements = (req, res) => {
    let { id } = req.params
    if (id === undefined) {
        readAllElements(req, res)
    } else {
        readSingleElement(req, res)
    }
}

const readAllElements = async (req, res) => {
    const { rows } = await pool.query("SELECT * FROM elements")
    res.json(rows)
}

const readSingleElement = async (req, res) => {
    let { id } = req.params
    id = capitalize(id)
    let columnsToSearch = undefined
    if (isNaN(parseInt(id))) {
        columnsToSearch = ["name", "symbol"]
    } else {
        id = parseInt(id)
        columnsToSearch = ["atomic_number"]
    }
    for (const columnToSearch of columnsToSearch) {
        const { rowCount, rows } = await pool.query(`SELECT * FROM elements WHERE ${columnToSearch} = $1`, [id])
        if (rowCount !== 0) {
            res.json(rows[0])
            return
        }
    }
    res.json([])
}

const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1).toLowerCase()
}

const sendPageNotFound = (req, res) => {
    res.redirect("/page-not-found.html")
}

start()