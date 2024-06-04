import { expect, type Locator , type Page } from "@playwright/test";


export class ProjectPage{
    readonly page: Page
    readonly createProjectButton: Locator
    readonly projectModal: Locator
    readonly projectTitileInput: Locator
    readonly continueButton: Locator
    readonly projectHeading: Locator
    projectName: String
    projectSlug: String 
    constructor(page){
        this.page = page;
        this.createProjectButton = page.locator("//a[normalize-space()='Start New Project']")
        this.projectModal = page.locator("//div[@class='create-project-content']")
        this.projectTitileInput = page.locator("//div[@class='create-project-content']//input[@placeholder='Title']")
        this.continueButton = page.locator("//span[normalize-space()='Continue']")
        this.projectHeading = page.locator("//h1[@class='project-name']")
    }

    async createProject(projectName, orgslug){
        this.projectName = projectName
        await this.page.goto("https://app.aks-cicd-23173.cicd.cnvrg.me/"+orgslug);
        await this.createProjectButton.click();
        await expect(this.projectModal).toContainText("Start New Project")
        await this.projectTitileInput.fill(projectName)
        await this.continueButton.click()
        await expect(await this.projectHeading).toHaveText(projectName, {timeout: 30000});
    }
}