import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

import Address from './Address';
import Phone from './Phone'

/**
 * User entity fields:
 * - @id - *String*
 * - @role_id - *String*
 * - @name - *String*
 * - @email - *String*
 * - @password - *String*
 * - @document_number - *String*
 * - @phone_id - *String*
 * - @phone - **(*optional*)** stores the phone entity
 * - @main_address_id - *String*
 * - @address - **(*optional*)** stores the address entity
 * - @sex - *String*
 * - @birthdate - Date
 * - @info - returns useful information about the entity:**id**, **name**, **email**, **birthdate**, **sex**, **document_number**
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
  deleted_at?: Date;

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