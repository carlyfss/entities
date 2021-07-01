import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
  DeleteDateColumn
} from 'typeorm';
import Role from './Role';
import Tenant from './Tenant';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tenant_id: string;
  
  @JoinColumn()
  @ManyToOne(() => Tenant, tenant => tenant.id)
  tenant: Tenant;

  @Column()
  role_id: string;
  
  @JoinColumn()
  @ManyToOne(() => Role, role => role.id)
  role: Role;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  document_number: string;

  @Column()
  sex: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}

export default User;
