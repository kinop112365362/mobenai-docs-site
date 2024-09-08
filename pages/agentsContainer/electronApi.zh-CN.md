# Electron API

Electron API 是 Mo AI Studio 中用于与底层系统交互的接口集合。它提供了文件操作、环境变量获取、屏幕共享、窗口管理和应用更新等功能，使得 Mo AI Studio 能够充分利用 Electron 的跨平台特性。

## 文件操作 API

文件操作 API 提供了一系列方法来读取、写入和管理文件系统。

### readFiles(filePaths: string[]): Promise<any>

读取多个文件的内容。

- 参数：
  - `filePaths`: 文件路径数组
- 返回值：Promise，解析为文件内容

### writeFile(filePath: string, content: string): Promise<void>

写入内容到指定文件。

- 参数：
  - `filePath`: 文件路径
  - `content`: 要写入的内容
- 返回值：Promise，表示操作完成

### readFile(filePath: string): Promise<string>

读取单个文件的内容。

- 参数：
  - `filePath`: 文件路径
- 返回值：Promise，解析为文件内容

### readDir(dirPath: string): Promise<string[]>

读取目录内容。

- 参数：
  - `dirPath`: 目录路径
- 返回值：Promise，解析为目录中的文件和子目录列表

### renameFile(oldPath: string, newPath: string): Promise<void>

重命名文件或移动文件。

- 参数：
  - `oldPath`: 原文件路径
  - `newPath`: 新文件路径
- 返回值：Promise，表示操作完成

### selectDirectory(): Promise<string>

打开目录选择对话框。

- 返回值：Promise，解析为选中的目录路径

### selectFiles(): Promise<string[]>

打开文件选择对话框。

- 返回值：Promise，解析为选中的文件路径数组

### getDirectoryStructure(dirPath: string): Promise<any>

获取目录结构。

- 参数：
  - `dirPath`: 目录路径
- 返回值：Promise，解析为目录结构对象

### getAbsolutePath(filePath: string): Promise<string>

获取文件的绝对路径。

- 参数：
  - `filePath`: 文件路径
- 返回值：Promise，解析为文件的绝对路径

### readDirectoryRecursive(dirPath: string): Promise<string[]>

递归读取目录内容。

- 参数：
  - `dirPath`: 目录路径
- 返回值：Promise，解析为目录及其子目录中的所有文件路径

### executePandoc(inputFile: string, outputFile: string, fromFormat: string, toFormat: string): Promise<void>

执行 Pandoc 转换。

- 参数：
  - `inputFile`: 输入文件路径
  - `outputFile`: 输出文件路径
  - `fromFormat`: 输入格式
  - `toFormat`: 输出格式
- 返回值：Promise，表示操作完成

### undoGitCommit(): Promise<void>

撤销最后一次 Git 提交。

- 返回值：Promise，表示操作完成

### getFileStats(filePath: string): Promise<any>

获取文件统计信息。

- 参数：
  - `filePath`: 文件路径
- 返回值：Promise，解析为文件统计信息对象

### createDirectory(): Promise<string>

创建新目录。

- 返回值：Promise，解析为新创建的目录路径

### cloneGitRepository(repoUrl: string, targetPath: string, progressCallback: (progress: number) => void): Promise<void>

克隆 Git 仓库。

- 参数：
  - `repoUrl`: Git 仓库 URL
  - `targetPath`: 目标路径
  - `progressCallback`: 进度回调函数
- 返回值：Promise，表示操作完成

### promptGitRepoUrl(): Promise<string>

提示用户输入 Git 仓库 URL。

- 返回值：Promise，解析为用户输入的 Git 仓库 URL

### checkGitInstalled(): Promise<boolean>

检查 Git 是否已安装。

- 返回值：Promise，解析为布尔值，表示 Git 是否已安装

## 环境变量 API

### getWsPort(): Promise<number>

获取 WebSocket 端口号。

- 返回值：Promise，解析为 WebSocket 端口号

## 屏幕共享 API

### getSources(): Promise<any[]>

获取可用的屏幕源。

- 返回值：Promise，解析为可用屏幕源数组

### captureScreenshot(sourceId: string): Promise<string>

捕获指定屏幕源的截图。

- 参数：
  - `sourceId`: 屏幕源 ID
- 返回值：Promise，解析为截图数据 URL

## 窗口管理 API

### openChildWindow(): void

打开子窗口。

## 更新 API

### checkForUpdates(): Promise<any>

检查应用更新。

- 返回值：Promise，解析为更新信息

### downloadUpdate(): Promise<void>

下载应用更新。

- 返回值：Promise，表示下载完成

### quitAndInstall(): Promise<void>

退出应用并安装更新。

- 返回值：Promise，表示操作完成

这些 API 方法可以通过 `window.electronAPI` 对象访问，例如：

```javascript
window.electronAPI.file.readFile('/path/to/file').then(content => {
  console.log(content);
});
```

通过使用这些 API，Mo AI Studio 可以实现与本地文件系统的交互、屏幕共享、应用更新等功能，大大增强了应用的功能性和用户体验。