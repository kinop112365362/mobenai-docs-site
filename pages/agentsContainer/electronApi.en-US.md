# Electron API

The Electron API is a collection of interfaces in Mo AI Studio used for interacting with the underlying system. It provides functionalities such as file operations, environment variable retrieval, screen sharing, window management, and application updates, allowing Mo AI Studio to fully utilize Electron's cross-platform features.

## File Operation API

The File Operation API provides a series of methods for reading, writing, and managing the file system.

### readFiles(filePaths: string[]): Promise<any>

Reads the contents of multiple files.

- Parameters:
  - `filePaths`: An array of file paths
- Return value: Promise, resolves to file contents

### writeFile(filePath: string, content: string): Promise<void>

Writes content to a specified file.

- Parameters:
  - `filePath`: File path
  - `content`: Content to be written
- Return value: Promise, indicates operation completion

### readFile(filePath: string): Promise<string>

Reads the content of a single file.

- Parameters:
  - `filePath`: File path
- Return value: Promise, resolves to file content

### readDir(dirPath: string): Promise<string[]>

Reads directory contents.

- Parameters:
  - `dirPath`: Directory path
- Return value: Promise, resolves to a list of files and subdirectories in the directory

### renameFile(oldPath: string, newPath: string): Promise<void>

Renames or moves a file.

- Parameters:
  - `oldPath`: Original file path
  - `newPath`: New file path
- Return value: Promise, indicates operation completion

### selectDirectory(): Promise<string>

Opens a directory selection dialog.

- Return value: Promise, resolves to the selected directory path

### selectFiles(): Promise<string[]>

Opens a file selection dialog.

- Return value: Promise, resolves to an array of selected file paths

### getDirectoryStructure(dirPath: string): Promise<any>

Gets the directory structure.

- Parameters:
  - `dirPath`: Directory path
- Return value: Promise, resolves to a directory structure object

### getAbsolutePath(filePath: string): Promise<string>

Gets the absolute path of a file.

- Parameters:
  - `filePath`: File path
- Return value: Promise, resolves to the absolute path of the file

### readDirectoryRecursive(dirPath: string): Promise<string[]>

Recursively reads directory contents.

- Parameters:
  - `dirPath`: Directory path
- Return value: Promise, resolves to all file paths in the directory and its subdirectories

### executePandoc(inputFile: string, outputFile: string, fromFormat: string, toFormat: string): Promise<void>

Executes Pandoc conversion.

- Parameters:
  - `inputFile`: Input file path
  - `outputFile`: Output file path
  - `fromFormat`: Input format
  - `toFormat`: Output format
- Return value: Promise, indicates operation completion

### undoGitCommit(): Promise<void>

Undoes the last Git commit.

- Return value: Promise, indicates operation completion

### getFileStats(filePath: string): Promise<any>

Gets file statistics.

- Parameters:
  - `filePath`: File path
- Return value: Promise, resolves to a file statistics object

### createDirectory(): Promise<string>

Creates a new directory.

- Return value: Promise, resolves to the path of the newly created directory

### cloneGitRepository(repoUrl: string, targetPath: string, progressCallback: (progress: number) => void): Promise<void>

Clones a Git repository.

- Parameters:
  - `repoUrl`: Git repository URL
  - `targetPath`: Target path
  - `progressCallback`: Progress callback function
- Return value: Promise, indicates operation completion

### promptGitRepoUrl(): Promise<string>

Prompts the user to input a Git repository URL.

- Return value: Promise, resolves to the Git repository URL input by the user

### checkGitInstalled(): Promise<boolean>

Checks if Git is installed.

- Return value: Promise, resolves to a boolean indicating whether Git is installed

## Environment Variable API

### getWsPort(): Promise<number>

Gets the WebSocket port number.

- Return value: Promise, resolves to the WebSocket port number

## Screen Sharing API

### getSources(): Promise<any[]>

Gets available screen sources.

- Return value: Promise, resolves to an array of available screen sources

### captureScreenshot(sourceId: string): Promise<string>

Captures a screenshot of the specified screen source.

- Parameters:
  - `sourceId`: Screen source ID
- Return value: Promise, resolves to the screenshot data URL

## Window Management API

### openChildWindow(): void

Opens a child window.

## Update API

### checkForUpdates(): Promise<any>

Checks for application updates.

- Return value: Promise, resolves to update information

### downloadUpdate(): Promise<void>

Downloads application updates.

- Return value: Promise, indicates download completion

### quitAndInstall(): Promise<void>

Quits the application and installs updates.

- Return value: Promise, indicates operation completion

These API methods can be accessed through the `window.electronAPI` object, for example:

```javascript
window.electronAPI.file.readFile('/path/to/file').then(content => {
  console.log(content);
});
```

By using these APIs, Mo AI Studio can achieve interaction with the local file system, screen sharing, application updates, and other functionalities, greatly enhancing the application's functionality and user experience.