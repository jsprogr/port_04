const Groups = require('../models/GroupsVk')
const errorHandler = require('../utils/errorHandler')

// как в orders
module.exports.getAll = async function(req, res) {
    try {
        const groups = await Groups.find({user: req.user.id})
        res.status(200).json(groups)
    } catch (e) {
        errorHandler(res, e)
    }

}

module.exports.getById = async function(req, res) {
    try {
        const group = await Groups.findById({id: req.params.id})
        res.status(200).json(group)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async function(req, res) {
    try {
        await Groups.remove({_id: request.parms.id})
        res.status(200).json({
            message: 'Категория удалена.'
        })
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.create = async function(req, res) {
    const group = new Groups({
        name: req.body.name,
        user: req.user.id,
        imageSrc: req.file ? req.file.path : '' 
    })
    try {
        await group.save()
        res.status(201).json(group)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function(req, res) {
    const updated = {
        name: req.body.name
    }

    if (req.file) {
        updated.imageSrc = req.file.path
    }
    try {
        const group = await Groups.findOneAndUpdate(
            {_id: req.params.id},
            {$set: updated},
            {new: true}
        )
        res.status(200).json(group)
    } catch (e) {
        errorHandler(res, e)
    }
}