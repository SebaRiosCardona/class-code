import fs from 'fs';
import crypto from 'crypto';
import path from 'path'

class UserManager{
  constructor(rutaArchivo){
    this.path = rutaArchivo
  }

  async leerUsuarios(){
    if(fs.existsSync(this.path)){
      return JSON.parse(await fs.promises.readFile(this.path, {encoding: 'utf-8'}))
    }else{
      return []
    }
  }

  async addUsuarios(nombre, email){
    let usuarios = await this.leerUsuarios()
  }
}

export default UserManager;
