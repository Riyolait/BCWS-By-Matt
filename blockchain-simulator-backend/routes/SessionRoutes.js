import express from "express";
import Session from "../models/Session.js";

const router = express.Router();

// Sauvegarder une session blockchain
router.post("/save", async (req, res) => {
  const { sessionId, blocks } = req.body;

  try {
    let session = await Session.findOne({ sessionId });
    if (session) {
      // Mettre à jour la session existante
      session.blocks = blocks;
    } else {
      // Créer une nouvelle session
      session = new Session({ sessionId, blocks });
    }
    await session.save();
    res.json({ message: "Session saved successfully", session });
  } catch (err) {
    res.status(500).json({ message: "Error saving session", error: err });
  }
});

// Charger une session blockchain
router.get("/:sessionId", async (req, res) => {
  const { sessionId } = req.params;

  try {
    const session = await Session.findOne({ sessionId });
    if (session) {
      res.json(session);
    } else {
      res.status(404).json({ message: "Session not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error fetching session", error: err });
  }
});

export default router;
