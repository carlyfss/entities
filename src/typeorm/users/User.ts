import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from '../../../node_modules/typeorm';

import Address from './Address';
import Phone from './Phone'

/**
 * User entity fields:
 * @id string
 * @role_id string
 * @name string
 * @email string
 * @password string
 * @document_number string
 * @phone_id string
 * @phone (optional) stores the phone entity
 * @main_address_id string
 * @address (optional) stores the address entity
 * @sex string
 * @birthdate Date
 */
@Entity('users')
export default class User {
  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  role_id!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  document_number!: string;

  @Column()
  phone_id!: string;

  @Column()
  main_address_id!: string;

  @Column()
  sex!: string;

  @Column()
  birthdate!: Date;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @DeleteDateColumn()
  deleted_at!: Date;

  address?: Partial<Address>;

  phone?: Partial<Phone>;

  get info(): Partial<User> {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      birthdate: this.birthdate,
      sex: this.sex,
      document_number: this.document_number,
    }
  }
}