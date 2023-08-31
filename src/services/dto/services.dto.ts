

import { IsOptional,IsString, IsNumber, IsBoolean } from "class-validator";



export class ObjectStorageDto{
  
  @IsString()
  readonly object_storage_link:string;


  @IsOptional()
  @IsBoolean()
  readonly isNegative :boolean;

}

export class SystemSecurityCheckerDto{

  @IsString()
  readonly platform:'PUB'|'FIN'|'GOV'

  @IsOptional()
  @IsString()
  readonly test_env:'BETA'|'REAL'
}

