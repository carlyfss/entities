import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Address } from '.';
import Phone from './Phone';

/**
 * User entity fields:
 * @id string
 * @role_id string
 * @name string
 * @email string
 * @password string
 * @document_number string
 * @main_phone_id string
 * @phone (optional) holds the phone entity to return in requests
 * @main_address_id string
 * @address (optional) holds the address entity to return in requests
 * @sex string
 * @birthdate Date
 */
@Entity('users')
export default class User {
  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  role_id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  document_number: string;

  @Column()
  phone_id: string;

  phone?: Phone;

  @Column()
  main_address_id: string;
  
  address?: Address;

  @Column()
  sex: string;

  @Column()
  birthdate: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}