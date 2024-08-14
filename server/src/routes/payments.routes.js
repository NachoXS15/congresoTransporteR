import { Router } from "express";

const router = Router()

router.get('/', (req, res) => res.send("Inicio"))
router.get('/creating-order', (req, res) => res.send("Creando orden"))

router.get('/pending', (req, res) => res.send("Orden pendiente"))
router.get('/failure', (req, res) => res.send("Orden fallida"))
router.get('/sucess', (req, res) => res.send("Orden creada"))

export default router