import { Injectable } from '@nestjs/common';

import { ObjectStorageDto,SystemSecurityCheckerDto } from './dto/services.dto';

import axios from 'axios';
import * as dotenv from "dotenv";
import * as path from 'path';

// ssc 관련 env 가 로딩되지 않았다면 로드합니다 .
if(typeof process.env.__REAL__GOV_SYSTEM_SECURITY_CHECEKR==='undefined'){
  // 프로젝트 baseURL .env를 부릅니다.
  dotenv.config({
    path:path.resolve(process.cwd(),"env/url.env"),
    // 빌드 배포시엔 false 
    debug:true,
  })
}

@Injectable()
export class ServicesService {


  downloadServices(obsDto:ObjectStorageDto){

    return 'downloadServices';

  }


  systemSecurityChecker(sscDto:SystemSecurityCheckerDto){

    return 'system-security-check';

  }

}
