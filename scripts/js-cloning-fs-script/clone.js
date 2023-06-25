const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '../src', 'File.jsx')
const outputFilePath = path.join(__dirname, '../src', 'File_clone.jsx')

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }

    const startMarkers = ['/* @START_SCRIPT */', '// @START_SCRIPT']
    const endMarkers = ['/* @END_SCRIPT */', '// @END_SCRIPT']

    let startIndex = -1
    let endIndex = -1

    for (const marker of startMarkers) {
        startIndex = data.indexOf(marker)
        if (startIndex !== -1) {
            startIndex += marker.length
            break
        }
    }

    if (startIndex !== -1) {
        for (const marker of endMarkers) {
            endIndex = data.indexOf(marker, startIndex)
            if (endIndex !== -1) {
                break
            }
        }
    }

    if (startIndex !== -1 && endIndex !== -1) {
        const extractedContent = data.slice(startIndex, endIndex).trim()
        const contentWithComment = '// EXTRACTED:\n' + extractedContent

        fs.writeFile(outputFilePath, contentWithComment, 'utf8', err => {
            if (err) {
                console.error(err)
                return
            }
            console.log('File_clone.jsx created successfully!')
        })
    } else {
        console.log('Script content not found in File.jsx')
    }
})
