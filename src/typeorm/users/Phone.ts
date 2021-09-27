import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

/**
 * Role entity fields:
 * - @id - *String*
 * - @user_id - *String*
 * - @country_code - *Number*
 * - @prefix - *Number*
 * - @number - *String*
 * - @verified - *Boolean*
 * - @info - returns useful information about the entity:**id**, **country**, **prefix**, **number**, **verified**
 */
@Entity('phones')
export default class Phone {
  constructor(partial: Partial<Phone>) {
    Object.assign(this, partial);
  }
  
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  user_id!: string;

  @Column()
  country_code!: number;

  @Column()
  prefix!: number;

  @Column()
  number!: string;

  @Column()
  verified!: boolean;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @DeleteDateColumn()
  deleted_at?: Date;

  get info(): Partial<Phone> {
    return {
      id: this.id,
      country_code: this.country_code,
      prefix: this.prefix,
      number: this.number,
      verified: this.verified,
    }
  }
}