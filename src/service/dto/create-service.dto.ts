import { IsString, IsOptional, IsNumber, IsNotEmpty, IsDate } from 'class-validator';
export class CreateServiceDto {
    @IsString()
    @IsNotEmpty()
    name: string; 

    @IsString()
    @IsNotEmpty()
    category: string;

    @IsOptional()
    @IsString()
    description?: string;

    imageUrl?: string;

    @IsNumber()
    @IsNotEmpty()
    priceUah: number;

    @IsOptional()
    @IsNumber()
    priceEur?: number;

    @IsOptional()
    @IsDate()
    createdAt?: Date;

    @IsOptional()
    @IsDate()
    updatedAt?: Date;

    @IsOptional()
    @IsNumber()
    reviewCount?: number;
}
/*
id          Int      @id @default(autoincrement())
  name        String
  category    String
  description String?
  imageUrl    String?
  priceUah    Int
  priceEur    Int?
  createdAt   DateTime @default(now())
  updatedAt   DateTime? @updatedAt
  reviewCount Int @default(0)


  service_features ServiceFeature []
}

model ServiceFeature  {
  id          Int      @id @default(autoincrement())
  serviceId   Int
  sortOrder   Int      @default(0)
  text        String

  service     Service  @relation(fields: [serviceId], references: [id], onDelete: Cascade)
*/