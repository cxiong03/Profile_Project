const express = require('express')
const router = express.Router()
const Profile  = require('../models/graduates')

// Getting all
router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find()
        res.json(profiles)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting One
router.get('/:id', getProfile, (req, res) => {
    res.json(res.profile)
})

// Create
router.post('/', async (req, res) => {
    const profile = new Profile({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        graduationDate: req.body.graduationDate,
        jobTitle: req.body.jobTitle,
        companyName: req.body.companyName,
        keySkills: req.body.keySkills,
        gitHub: req.body.gitHub,
        linkedIn: req.body.linkedIn,
        twitter: req.body.twitter,
        photo: req.body.photo
    })

    try {
        const newProfile = await profile.save()
        res.status(201).json(newProfile)
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
})

// Update
router.patch('/:id', getProfile, async (req, res) => {
    if (req.body.firstName != null) {
        res.profile.firstName = req.body.firstName
    }
    if (req.body.lastName != null) {
        res.profile.lastName = req.body.lastName
    }
    if (req.body.graduationDate != null) {
        res.profile.graduationDate = req.body.graduationDate
    }
    if (req.body.jobTitle != null) {
        res.profile.jobTitle = req.body.jobTitle
    }
    if (req.body.companyName != null) {
        res.profile.companyName = req.body.companyName
    }
    if (req.body.keySkills != null) {
        res.profile.keySkills = req.body.keySkills
    }
    if (req.body.gitHub != null) {
        res.profile.gitHub = req.body.gitHub
    }
    if (req.body.linkedIn != null) {
        res.profile.linkedIn = req.body.linkedIn
    }
    if (req.body.twitter != null) {
        res.profile.twitter = req.body.twitter
    }
    if (req.body.photo != null) {
        res.profile.photo = req.body.photo
    }
    try {
        const updatedProfile = await res.profile.save()
        res.json(updatedProfile)
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
})

// Delete
router.delete('/:id', getProfile, async (req, res) => {
    try {
        await res.profile.remove()
        res.json({ message: 'Deleted Profile' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getProfile(req, res, next) {
    let profile
    try {
        profile = await Profile.findById(req.params.id)
        if (profile == null)
        return res.status(404).json({ message: 'Cannot find profile' })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.profile = profile
    next()
}

module.exports = router