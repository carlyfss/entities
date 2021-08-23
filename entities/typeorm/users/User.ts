import { Exclude } from 'class-transformer';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  OneToMany
} from 'typeorm';
import { Address } from '.';

/**
 * User entity fields:
 * @id string
 * @role_id string
 * @name string
 * @email string
 * @password string
 * @document_number string
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
  @Exclude()
  role_id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  @Exclude()
  document_number: string;

  @Column()
  main_address_index: number;

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