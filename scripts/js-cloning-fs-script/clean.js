const fs = require('fs')
const path = require('path')

const startMarkers = ['/* @START_SCRIPT */', '// @START_SCRIPT']
const endMarkers = ['/* @END_SCRIPT */', '// @END_SCRIPT']

const srcDir = path.join(__dirname, '../src')

fs.readdir(srcDir, (err, files) => {
    if (err) {
        console.error(err)
        return
    }

    files.forEach(file => {
        const filePath = path.join(srcDir, file)

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(err)
                return
            }

            const lines = data.split('\n')

            const updatedLines = lines.filter(line => {
                const trimmedLine = line.trim()
                if (startMarkers.some(marker => trimmedLine.includes(marker))) {
                    return false
                }

                if (endMarkers.some(marker => trimmedLine.includes(marker))) {
                    return false
                }

                return true
            })

            const updatedContent = updatedLines.join('\n')

            fs.writeFile(filePath, updatedContent, 'utf8', err => {
                if (err) {
                    console.error(err)
                    return
                }
                console.log(`Removed script markers from ${filePath}`)
            })
        })
    })
})
