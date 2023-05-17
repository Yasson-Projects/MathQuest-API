import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clients' })
export class ClientRequest {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  client_address!: string;

  @Column()
  request_max!: number;
}
