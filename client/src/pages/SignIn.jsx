import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';
import { motion } from 'framer-motion';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-[#b4cdc6] flex rounded-2xl shadow-lg max-w-3xl p-5 items-center dark:bg-slate-700">
        <div className="md:w-1/2 px-8 md:px-16">
          <motion.h1
            className="text-2xl mb-4 font-bold text-gray-800 text-center dark:text-white"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Sign In
          </motion.h1>
          <motion.p
            className="text-xs mt-2 text-black text-center dark:text-white"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
           Welcome!
          </motion.p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <input
              type="email"
              placeholder="email"
              className="p-2 mt-4 rounded-xl border"
              id="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="password"
              className="p-2 rounded-xl border"
              id="password"
              onChange={handleChange}
            />

            <button
              disabled={loading}
              className=" bg-[#1f5c50] text-sm p-2 text-white rounded-xl uppercase hover:opacity-95 disabled:opacity-80 hover:scale-105 duration-300"
            >
              {loading ? 'Cargando...' : 'Entrar'}
            </button>
            <div className="grid grid-cols-3 items-center text-gray-400">
              <hr class="border-gray-800 dark:border-white" />
              <p class="text-center text-sm text-slate-800 dark:text-white">
                OR
              </p>
              <hr class="border-gray-800 dark:border-white" />
            </div>

            <OAuth />
            <p className="text-sm mt-4 text-center text-gray-600 dark:text-white">
            You do not have an account?{" "}
          <Link to="/Sign-up" className="text-blue-600 underline">
          Sign Up 
          </Link>
        </p>
          </form>
        </div>

        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src="/login.webp" />
        </div>
        
      </div>
    </motion.section>
  );
}
