import solfege from "solfegejs";
import controllersPackage from "./controllers"

/**
 * The API bundle
 *
 * @class   Api
 */
export default class Api
{
    /**
     * Constructor
     */
    constructor()
    {
        // The controllers package
        this.controllers = controllersPackage;
    }
}
