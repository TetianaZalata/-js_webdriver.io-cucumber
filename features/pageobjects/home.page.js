

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputSearchBtn () {
        return $('.DocSearch-Button');
    }
    get inputSearchField () { 
        return $('.DocSearch-Input');
    }
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async searchOpen () {
        await this.inputSearchBtn.click();
    }
      async typeText (text) {
        await this.inputSearchField.setValue(text);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

export default new HomePage();